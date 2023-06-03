import cron from 'node-cron';
import { IgApiClient } from 'instagram-private-api';
import { get } from 'request-promise';

// const cron = require('node-cron');
// const { IgApiClient } = require('instagram-private-api');
// const { get } = require('request-promise');

const postToInsta = async (instaUsername, instaPassword, imageFile, caption) => {
    
    const ig = new IgApiClient();
    ig.state.generateDevice(instaUsername);
    await ig.account.login(instaUsername, instaPassword);

    const imageBuffer = await get({
        url: 'http://placekitten.com/200/300',
        encoding: null, 
    });

    await ig.publish.photo({
        file: imageBuffer,
        caption: caption,
    });
}

export const startPosting = (date, time, interval, instaUsername, instaPassword, imageFile, caption) => {

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
    
    // const task = cron.schedule(`* * * * *`, () => {
    //     postToInsta(instaUsername, instaPassword, imageFile, caption);
    // });
    postToInsta(instaUsername, instaPassword, imageFile, caption);


    // task.start();
};


{/* <option value="">Choose Interval</option>
<option value="1 day">1 day</option>
<option value="1 week">1 week</option>
<option value="1 month">1 month</option>
<option value="Every Other Month">Every Other Month</option>
<option value="6 months">6 months</option>
<option value="1 year">1 year</option> */}