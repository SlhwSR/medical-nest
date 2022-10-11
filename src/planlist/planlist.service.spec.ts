import { Test, TestingModule } from '@nestjs/testing';
import { PlanlistService } from './planlist.service';

describe('PlanlistService', () => {
  let service: PlanlistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanlistService],
    }).compile();

    service = module.get<PlanlistService>(PlanlistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
