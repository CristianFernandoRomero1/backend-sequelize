import {Router} from 'express';
import inspections from '../../controllers/inspector/inspections.js';
const router = Router();

/* router.get('/inspectorinspections', (req, res) => {
    inspections.inspectionList(req, res);
    //res.send('buscando inspecciones!');
}); */

router.post('/list', inspections.inspectionList);
router.post('/create', inspections.inspectionCreate);

export default router;