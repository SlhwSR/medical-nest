import { Test, TestingModule } from '@nestjs/testing';
import { PlanlistController } from './planlist.controller';

describe('PlanlistController', () => {
  let controller: PlanlistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanlistController],
    }).compile();

    controller = module.get<PlanlistController>(PlanlistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
