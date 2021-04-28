module.exports = (error, req, res, next)=>{
    if (typeof error === 'string') {
        res.status(500).json({
            message:error,
            data:[],
            error: true,
        })
    }else{
        res.status(500).json({
            message:'There was a server side error!',
            data:[],
            error: true,
        })
    }
}