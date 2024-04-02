const Couple = require('../../models/couple.model');

//GET ALL COUPLES
const getCouples = async (req,res) =>
{
    try {
        const couples = await Couple.find({});
        res.status(200).json(couples);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//GET SPECIFIC COUPLE
const getCouple = async (req,res) =>
{
    try {
        const { id } = req.params;
        const couple = await Couple.findById(id);
        res.status(200).json(couple);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//CREATE COUPLE
const createCouple = async (req,res) =>
{
    try {
        const couple = await Couple.create(req.body);
        res.status(200).json(couple);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//UPDATE A COUPLE
const updateCouple = async (req,res) =>
{
    try {

        const { id } = req.params;
        const couple = await Couple.findByIdAndUpdate(id, req.body);


        if (!couple) {
            return res.status(404).json({ message: "Couple not found" });
        }

        const updatedCouple = await Couple.findById(id);

        res.status(200).json(updatedCouple);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteCouple = async (req,res) =>
{
    try {

        const { id } = req.params;
        const couple = await Couple.findByIdAndDelete(id);

        if (!couple) {
            return res.status(404).json({ message: "Couple not found" });
        }

        res.status(200).json({ message: "Couple deleted successfully" });

    } catch (error) {
        res.status(404).json({ message: "Couple not found" });
    }
}


module.exports = {
    getCouples,
    getCouple,
    updateCouple,
    createCouple,
    deleteCouple
}