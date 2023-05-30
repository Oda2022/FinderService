import { dbConnect, dbDisconnect } from "@/utils/mongoose";
import Worker from "@/models/Worker.js";
import JobPostulation from "@/models/JobPostulation.js";
import JobRequest from "@/models/JobRequest.js";


export default async function handler(req, res) {
  await dbConnect();

    switch (req.method) {
        case "GET":
            try {
                const jobApply = await JobPostulation.find({})
                .populate("jobrequest", "name employer")
                .populate("worker", "-_id name type");

                if (jobApply.length !== 0) {
                await dbDisconnect();
                return res.status(200).json(jobApply);
                } else {
                await dbDisconnect();
                return res
                    .status(404)
                    .json({ error: "No se encontraron postulaciones" });
                }
            } catch (error) {
                await dbDisconnect();
                return res.status(400).json({ error: error.message });
            }

        case "POST":
            try { 


                // if (!req.body.worker || !req.body.worker.name) {
                //     return res.status(400).json({ error: "Worker name is missing" });
                //   }

                const {workerEmail, jobrequest, salary, message } = req.body

                if (!workerEmail) {
                    await dbDisconnect();
                    return res.status(400).json({ error: "Worker email is missing" });
                }

                const jobPostWorker = await Worker.findOne({email:workerEmail});

                if (!jobPostWorker) {
                    await dbDisconnect();
                    return res.status(400).json({ error: "Worker not found" });
                }

                const jobPostRequest = await JobRequest.findOne({
                    _id: jobrequest,
                })

                if(!jobPostRequest){
                    await dbDisconnect();
                    return res.status(400).json({error:'Job request not found'})
                }

                const newJobPostulation = new JobPostulation({
                    jobrequest:[jobPostRequest._id],
                    worker:[jobPostWorker._id],
                    salary,
                    message,
                });

                const saveJobPostulation = await newJobPostulation.save();
                const jobPostulationPost = await JobPostulation.findById(
                    saveJobPostulation._id
                ).populate("jobrequest", "title employer")
                await dbDisconnect();
                return res.status(201).json(jobPostulationPost);

            } catch (error) {
                await dbDisconnect();
                return res.status(400).json({ error: error.message });
            }
    }
}
