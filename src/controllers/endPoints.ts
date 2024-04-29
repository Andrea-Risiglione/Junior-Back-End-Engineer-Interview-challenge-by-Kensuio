import { Request, Response } from "express";
import os from "os";
export const alpha = (req: Request, res: Response) => {
    const unsortedObject = req.body;
    const sortedObject: { [key: string]: any } = {};
    Object.keys(unsortedObject).sort().forEach(key => sortedObject[key] = unsortedObject[key]);
    res.status(200).json(sortedObject);
};

export const flatten = (req: Request, res: Response) => {
    const arrayToJoin = req.body;
    Object.keys(arrayToJoin).forEach(key => { 
        if (Array.isArray(arrayToJoin[key])) {
            arrayToJoin[key] = arrayToJoin[key].join(",");
}})
    res.status(200).json(arrayToJoin);

}

export const status = async (req: Request, res: Response) => {
  const memUsedPct = (1 - (os.freemem() / os.totalmem())) * 100;
  const cpuUsedPct = os.loadavg()[0].toFixed(1);
  const discSpaceAvail = (os.freemem() / (1024 * 1024)).toFixed(1);

  res.json({
    'mem-used-pct': memUsedPct.toFixed(1),
    'disc-space-avail': discSpaceAvail,
    'cpu-used-pct': cpuUsedPct,
  });}
