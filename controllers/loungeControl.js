import SmokleySLounge from "../models/loungeModel.js";


export const createLoungeMember = async (req, res, next) => {
    const newLoungeMember = new SmokleySLounge(req.body)
    try {
        const savedLoungeMember = await newLoungeMember.save();
        res.status(200).json(savedLoungeMember);
    } catch (error) {
        next(error);
    }

}

export const updateLoungeMember = async (req, res, next) => {
    try {
        const updateLoungeMember = await SmokleySLounge.findOneAndUpdate(
            {discordID: req.params.discordID}, 
            {$set: req.body}, 
            {new: true}
        );
        res.status(200).json(updateLoungeMember);
    } catch (error) {
        next(error);
    }
    
}

export const getLoungeMember = async (req, res, next) => {
    try {
        const LoungeMember = await SmokleySLounge.findOne(
            {discordID: req.params.discordID}
        );
        res.status(200).json(LoungeMember);
    } catch (error) {
        next(error);
    }
    
}

export const getLoungeMembers = async (req, res, next) => {
    try {
        const LoungeMembers = await SmokleySLounge.find();
        res.status(200).json(LoungeMembers);
    } catch (error) {
        next(error);
    }
}