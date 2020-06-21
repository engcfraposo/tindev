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

        if (targetDev.likes.includes(loggedDev._id)) {
            const loggedSocket = req.connectedUsers[user];
            const targetSocket = req.connectedUsers[DevId];

            if(loggedSocket){
                req.io.to(loggedSocket).emit('match', targetDev);
            }
            if(targetSocket){
                req.io.to(targetSocket).emit('match', loggedDev);
            }

            
        }

        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();
        
        return res.json(loggedDev);
    } 


}