const CallApiGet = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        return err;
    }
};

const CallApiPost = async (url, data) => {
    console.log(data);
    try {
        const response = await fetch(url,{
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(data)
        });
        const res = await response.json();
        return res;
    } catch (err) {
        return err;
    }
};

export {CallApiGet, CallApiPost};