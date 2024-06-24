const express = require("express");
const router = express.Router();
const userController = require("../controllers/api/userController");
const pencatatanController = require("../controllers/api/pencatatanController");
const penjualanController = require("../controllers/api/penjualanController");
const artikelController = require("../controllers/api/artikelController");
const faqController = require("../controllers/api/faqController");
const verifyToken = require("../middlewares/verifytoken");

// register dan login
router.post("/register", userController.register);
router.post("/login", userController.login);

// mengambil data user
router.get("/user", verifyToken, userController.getUser);
router.post("/edit-profile", verifyToken, userController.editProfile);

// pencatatan
router.get("/pencatatan", pencatatanController.indexPencatatan);
router.get("/pencatatan/:id", pencatatanController.showPencatatan);
router.get(
  "/pencatatan-user",
  verifyToken,
  pencatatanController.indexPencatatanUser
);
router.post("/pencatatan", verifyToken, pencatatanController.createPencatatan);
router.put(
  "/pencatatan/:id",
  verifyToken,
  pencatatanController.updatePencatatan
);
router.put(
  "/pencatatan/:id/:id_user",
  verifyToken,
  pencatatanController.updatePencatatanUser
);
router.delete(
  "/pencatatan/:id",
  verifyToken,
  pencatatanController.deletePencatatan
);

// pencatatan detail (pencatatan pakan dan ikan)
router.get(
  "/pencatatan-detail",
  verifyToken,
  pencatatanController.indexPencatatanDetail
);
router.get(
  "/pencatatan-detail/:id",
  verifyToken,
  pencatatanController.showPencatatanDetail
);
router.post(
  "/pencatatan-detail",
  verifyToken,
  pencatatanController.createPencatatanDetail
);
router.put(
  "/pencatatan-detail/:id",
  verifyToken,
  pencatatanController.updatePencatatanDetail
);
router.delete(
  "/pencatatan-detail/:id",
  verifyToken,
  pencatatanController.deletePencatatanDetail
);

router.get("/penjualan", verifyToken, penjualanController.indexPenjualan);
router.get("/penjualan/:id", verifyToken, penjualanController.showPenjualan);
router.post("/penjualan", verifyToken, penjualanController.createPenjualan);
router.put("/penjualan/:id", verifyToken, penjualanController.updatePenjualan);
router.delete(
  "/penjualan/:id",
  verifyToken,
  penjualanController.deletePenjualan
);

router.get("/artikel", artikelController.indexArtikel);
router.get("/artikel/:id", artikelController.showArtikel);
router.post("/artikel", verifyToken, artikelController.createArtikelUser);
router.put("/artikel/:id", verifyToken, artikelController.updateArtikel);
router.delete("/artikel/:id", verifyToken, artikelController.deleteArtikel);

router.get("/faq", faqController.indexFaq);
router.get("/faq/:id", faqController.showFaq);
router.post("/faq", verifyToken, faqController.createFaq);
router.put("/faq/:id", verifyToken, faqController.updateFaq);
router.delete("/faq/:id", verifyToken, faqController.deleteFaq);

module.exports = router;
