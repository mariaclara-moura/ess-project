import { Router } from 'express';
import { PromotionController } from '../controllers';

const promotionRouter = Router();

promotionRouter.route('/')
  .post(
    PromotionController.create,
  );

promotionRouter.route('/:promotionId')
  .get(
    PromotionController.read,
  );

promotionRouter.route('/:promotionId')
  .delete(
    PromotionController.delete,
  );

export default promotionRouter;
