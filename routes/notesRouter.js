const express=require("express")
const notesRouters=express.Router()
const { 
    createNotes,
    getAllNotes,
    getNoteById,
    queryNotesByTitleSubString,
    updateNote
}=require("../controller/notesController")

/**
 * @swagger
 * /notes/create:
 *   post:
 *     summary: Create a new note
 *     description: Add a title and body to create a new note.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Meeting Notes"
 *               body:
 *                 type: string
 *                 example: "Notes from the meeting with the team."
 *     responses:
 *       '200':
 *         description: Note created successfully
 *       '400':
 *         description: Bad request, e.g., missing or invalid input
 *       '409':
 *         description: Conflict, e.g., note already exists or other conflict
 *       '500':
 *         description: Internal server error

 */

notesRouters.post("/create",createNotes)

/**
 * @swagger
 * /notes/getAllNotes:
 *   get:
 *     summary:  to get all notes
 *     description: it will all notes created till now
 *     responses:
 *       '200':
 *         description: notes fetched successfully
 *       '401':
 *         description: Unauthorized
 *       '409':
 *         description: Error in fetching domainlist
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
notesRouters.get("/getAllNotes",getAllNotes)
/**
 * @swagger
 * /notes/getNotesById/{noteId}:
 *   get:
 *     summary: get individual note
 *     description: pass noteId in params and it will return note corresponding to tha noteId
 *     parameters:
 *       - name: noteId
 *         in: path
 *         description: ID of the note
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: note fetched successfully
 *       '401':
 *         description: Unauthorized
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
notesRouters.get("/getNotesById/:noteId",getNoteById)
/**
 * @swagger
 * /notes/getNotesByTitleSubString:
 *   get:
 *     summary: Search notes based on a substring in the title
 *     description: Retrieve notes where the title contains the specified substring.
 *     parameters:
 *       - name: title
 *         in: query
 *         description: Substring to search for in the note titles
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Notes retrieved successfully
 *       '400':
 *         description: Bad request, e.g., missing or invalid query parameter
 *       '401':
 *         description: Unauthorized, e.g., missing authentication
 *       '500':
 *         description: Internal server error, e.g., unexpected server issue
 */

notesRouters.get("/getNotesByTitleSubString",queryNotesByTitleSubString)

/**
 * @swagger
 * /notes/updateNote/{noteId}:
 *   put:
 *     summary: Update a note by its ID
 *     description: Update the title and/or body of an existing note identified by its unique ID.
 *     parameters:
 *       - name: noteId
 *         in: path
 *         description: Unique identifier of the note to update
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Updated Meeting Notes"
 *               body:
 *                 type: string
 *                 example: "Updated notes from the meeting."
 *     responses:
 *       '200':
 *         description: Note updated successfully
 *       '400':
 *         description: Bad request, e.g., missing or invalid input
 *       '404':
 *         description: Note not found, e.g., invalid ID
 *       '500':
 *         description: Internal server error
 
 */


notesRouters.put("/updateNote/:noteId",updateNote)



module.exports=notesRouters