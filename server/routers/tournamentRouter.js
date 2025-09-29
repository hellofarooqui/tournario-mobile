import express from 'express';
import {
  getAllTournaments,
  createTournament,
  getTournamentById,
  updateTournament,
  deleteTournament,
  getTournamentTeams,
  addTournamentTeam,
  getPointsTable,
  enrollIntoTournament,
  getTournamentPlayers,
  getTournamentGroups,
  addTournamentGroup,
  getTournamentGroupDetails,
  getAllFormats,
  goLiveTournament,
  getTournamentFormat
} from "../controllers/tournamentController.js";
import { createTournamentGame,getTournamentGames } from '../controllers/gameController.js';
import { getToken } from '../middleware/getToken.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();



router.post('/:tournamentId/games', createTournamentGame);
router.get('/:tournamentId/games', getTournamentGames);

router.post('/:tournamentId/enroll', verifyToken, enrollIntoTournament);

router.get('/:id/teams', getTournamentTeams);
router.post('/:id/teams', addTournamentTeam)

router.get("/:id/groups", getTournamentGroups);
router.post("/:id/groups", addTournamentGroup);
router.get("/:id/groups/:groupId", getTournamentGroupDetails);

router.get('/:id/players', getTournamentPlayers);

router.get("/:id/points-table", getPointsTable);

router.get("/", getAllTournaments);


router.post('/', verifyToken, createTournament);
router.get('/tournament-formats', getAllFormats);
router.get('/:id', getTournamentById);
router.get('/:id/tournament-format', getTournamentFormat);
router.put('/:id', updateTournament);
router.delete('/:id', deleteTournament);
router.put('/:id/go-live', verifyToken, goLiveTournament);


export default router