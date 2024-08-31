import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { User } from "../models/user.model.js";

const GetData = async (req, res, next) => {
  try {
    // const { email } = req.body;
    const foundedUser = await User.find();
    res.status(StatusCodes.OK).send({
      message: ReasonPhrases.OK,
      foundedUser,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

export { GetData };
