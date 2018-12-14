exports.redirectPinga = (req, res, next) => {
     const plmn1 = req.query.plmn1;
    const spn1 = req.query.spn1;
    const plmn2 = req.query.plmn2;
    const spn2 = req.query.spn2;
    const channel = req.query.channel;
    if(channel == "tefbr"){
        res.send('Zaga!');
    } else {
        res.send('Teile');
    }
};