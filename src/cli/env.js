const PREFIX = 'RSS_';

const parseEnv = () => {
    let vars = [];

    Object.entries(process.env).map(item => {
        const [key, value] = item;
        if(key.startsWith(PREFIX)) vars.push(`${key}=${value}`);
    });

    console.log(vars.join('; '));
};

parseEnv();