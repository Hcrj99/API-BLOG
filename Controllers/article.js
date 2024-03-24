const test = (req, res) => {
    return res.status(200).json({
        message: "test controller articles"
    });
}

const testing = (req, res) => {

    console.log("start end point test");


    return res.status(200).json([
        {
            curse: "react",
            name: "camilo",
            url: "camiloDEV.com"
        },
        {
            curse: "react",
            name: "camilo",
            url: "camiloDEV.com"
        }
    ])

};//rute for get -navegator

module.exports = {
    test,
    testing
}