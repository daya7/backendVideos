import {Router} from 'express';
const router = Router();
import * as videoCtrl from './Video.controller';

//routes
router.get('/', videoCtrl .getVideos );
router.get('/:id', videoCtrl.getVideo);
router.post('/', videoCtrl.createVideos);
router.put('/:id', videoCtrl.updateVideos);
router.delete('/:id', videoCtrl.deleteVideos);

export default router;