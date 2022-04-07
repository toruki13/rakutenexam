export const get404 = (req, res, next) => {
       res.status(404).send({ message: "malformed request" });
     };
     
export const get500 = (req, res, next) => {
       res.status(500).send({message: "server unavailable"});
     };
     