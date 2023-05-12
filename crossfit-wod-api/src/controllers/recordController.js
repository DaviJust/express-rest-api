// Não funcionou a requisição
const recordService = require("../services/recordService");

const getAllRecords = async (req, res) => {
    try {
        const allRecords = await recordService.getAllRecords();
        res.send({ status: "OK", data: allRecords });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: "FAILED",
            data: { error: error?.message || error },
        });
    }
};

const getOneRecord = async (req, res) => {
    const {
        params: { recordId },
    } = req;
    if (!recordId) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':recordId' can not be empty" },
        });
    }
    try {
        const record = await recordService.getOneRecord(recordId);
        res.send({ status: "OK", data: record });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: "FAILED",
            data: { error: error?.message || error },
        });
    }
};

module.exports = {
    getAllRecords,
    getOneRecord
}