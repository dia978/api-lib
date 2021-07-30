import express from "express";
import { addBook, viewBook, viewAllBooks, deleteBook, updateBook } from '../controllers/BooksController.js';
import { addBorrowing, viewBorrowing, viewAllBorrowings, returnBook, viewMemberBorrowings } from '../controllers/BorrowController.js';
import { addMember, signinMember, viewMember, viewAllMembers, updateMember, deleteMember } from '../controllers/MemberController.js';

const booksRouter = express.Router();
const membersRouter = express.Router();
const borrowsRouter = express.Router();
const adminsRouter = express.Router();

// books
booksRouter.post("/", addBook)
booksRouter.get("/:id", viewBook)
booksRouter.get("/", viewAllBooks)
booksRouter.delete("/:id", deleteBook)
booksRouter.put("/:id", updateBook)

// borrows
borrowsRouter.post("/", addBorrowing)
borrowsRouter.post("/:id", returnBook)
borrowsRouter.get("/:id", viewBorrowing)
borrowsRouter.get("/", viewAllBorrowings)
borrowsRouter.get("/member/:id", viewMemberBorrowings)

// members
membersRouter.post("/signup", addMember)
membersRouter.post("/signin", signinMember)
membersRouter.get("/:id", viewMember)
membersRouter.get("/", viewAllMembers)
membersRouter.put("/:id", updateMember)
membersRouter.delete("/:id", deleteMember)

const router = express.Router();

router.use("/book", booksRouter)
router.use("/borrow", borrowsRouter)
router.use("/admin", adminsRouter)
router.use("/members", membersRouter)

export default router;