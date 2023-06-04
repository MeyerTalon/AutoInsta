const CronJob = require('cron').CronJob;
const { IgApiClient } = require('instagram-private-api');
const { get } = require('request-promise');
const fs = require('fs');

async function postToInsta(instaUsername, instaPassword, image, caption) {
    console.log(instaUsername);
    console.log(instaPassword);
    const ig = new IgApiClient();
        ig.state.generateDevice(instaUsername);
        await ig.account.login(instaUsername, instaPassword);


        const imageBuffer = await get({
            url: image,
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
        let day = date.slice(8);
        let month = date.slice(5, 7);

        if (interval === '1 day') {
            day = '1/1';
            month = '*';
        } else if (interval === '1 week') {
            day = day + '/7';
            month = '*'; 
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
        
        if (interval === 'Just Once') {
            postToInsta(instaUsername, instaPassword, image, caption);
        } else {
            const task = new CronJob(cronExp, async () => {
                postToInsta(instaUsername, instaPassword, image, caption);
            });

            task.start();
        }
        
    },
};