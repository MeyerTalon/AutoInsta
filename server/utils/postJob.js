const CronJob = require('cron').CronJob;
const { IgApiClient } = require('instagram-private-api');
const { get } = require('request-promise');
const fs = require('fs');

async function postToInsta(instaUsername, instaPassword, image, caption) {
    const ig = new IgApiClient();
        ig.state.generateDevice(instaUsername);
        await ig.account.login(instaUsername, instaPassword);

        // const buffer = Buffer.from(image, "base64");

        const imageBuffer = await get({
            url: 'http://placekitten.com/200/300',
            encoding: null, 
        });

        await ig.publish.photo({
            file: imageBuffer,
            caption: caption,
        });
}

module.exports = {
    instaJob: async function(time, date, interval, instaUsername, instaPassword, image, caption) {
        let hour = time.slice(0, 2);
        let minute = time.slice(3);
        let day = date.slice(5, 7);
        let month = date.slice(8);

        if (interval === '1 day') {
            day = day + '/1';
        } else if (interval === '1 week') {
            day = day + '/7';
            month = month + '/1'; 
        } else if (interval === '1 month') {
            month = month + '/1';
        } else if (interval === 'Every Other Month') {
            month = month + '/2';
        } else if (interval === '6 months') {
            month = month + '/6';
        } else if (interval === '1 year') {
            // nothing needed, default setting
        }

        let cronExp = `${minute} ${hour} ${day} ${month} *`;
        console.log(cronExp);

        const task = new CronJob(`* * * * *`, async () => {
            postToInsta(instaUsername, instaPassword, image, caption);
        });

        task.start();
    },
};