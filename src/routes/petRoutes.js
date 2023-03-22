import express from "express";
import PetController from "../controllers/petController.js";

const router = express.Router();

router
    .get("/pet", PetController.listPets)
    .get("/pet/:id", PetController.listPetById)
    .post("/pet", PetController.registerPet)
    .put("/pet/:id", PetController.updatePet)
    .delete("/pet/:id", PetController.removePet)
    
  export default router;