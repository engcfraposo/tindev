import Dev from '../models/Dev';

export default {

    async store(req, res) {
        const { user } = req.headers;
        const { DevId } = req.params;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(DevId);

        if (!targetDev) {
            return res.status(400).json({error: 'Dev not exists'});
        }

        loggedDev.dislikes.push(targetDev._id);

        await loggedDev.save();
        
        return res.json(loggedDev);
    } 


}