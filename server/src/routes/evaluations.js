import { Router } from 'express';
import {
  getAllEvaluations,
  getEvaluation,
  createEvaluation,
  getEvaluationSummary
} from '../controllers/evaluationController.js';

const router = Router();

// /summary MUST be registered before /:id so Express doesn't treat
// the literal string "summary" as a MongoDB ObjectId parameter.
router.get('/summary', getEvaluationSummary);
router.get('/',        getAllEvaluations);
router.post('/',       createEvaluation);
router.get('/:id',     getEvaluation);

export default router;
