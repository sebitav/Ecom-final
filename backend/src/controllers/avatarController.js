function getUserAvatar(req, res){
    const { userId } = req.params
    console.log({userId})
    res.sendFile(userId, { root: 'user-avatars' })
}

export default {getUserAvatar}