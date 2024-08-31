import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { User } from "../models/user.model.js";

const PostData = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };

    const createdUser = await User.create(user);

    console.log("---- createdUser ----", createdUser);

    res.status(StatusCodes.OK).send({
      message: ReasonPhrases.OK,
      createdUser,
    });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

export { PostData };
