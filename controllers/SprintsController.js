const Sprints = require('../models/SprintModel');

exports.supprimer = async (req, res) => {
    try {
        await Sprints.findByIdAndDelete(req.params.id);
        res.status(200).json('une tasck supprimé');
    } catch (err) {
        res.status(500).json(err.message);
    }
}

exports.create = async (req, res) => {
    try {
        const newSprint = new Sprints({
            ...req.body
        });

        await newSprint.save();

        res.status(200).json(newSprint);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

exports.getAll = async (req, res) => {
    try {
        const allSprints = await Sprints.find();

        res.status(200).json(allSprints)
    } catch (err) {
        res.status(500).json(err.message);

    }
}

exports.modifier = async (req, res) => {
    try {
        const modifiertask = await Sprints.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true });
        res.status(200).json({ message: "Updated successfully", modifiertask });
    } catch (err) {
        res.status(500).json(err.message);
    }
}