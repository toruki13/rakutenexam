import handler from './handlers/catfactsHandler.js';

export const getCats = async (req, res, next) => {
  //TODO ternary operator to check if the catfacts tables contain values, else use below and call the insert handler
  const data = await handler.getListFromAPI();
  res.status(200).send(data);
};
