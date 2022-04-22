import axios from 'axios';

export const blank = (input) => {
    getEstimatedAgeFromName("reuben");
    postData();
    console.log("running ");
    return input.length;
};

export const getEstimatedAgeFromName = async name => {
    const url = 'https://api.agify.io';
    try {
        const response = await axios.get(url, {
            params: {
                name
            }
        });
        console.log("successful response", response.data);
        return response.data;
      } catch (error) {
        // console.error(error);
        return error.toString();
    }
}

export const postData = async () => {
    try {
        const response = await axios.post('www.some-api.com/api', {
            key: 'value',
            key2: {
                key2_1: 'value'
            }
        });
        console.log(response.data);
      } catch (error) {
        // console.error(error);
    }
}