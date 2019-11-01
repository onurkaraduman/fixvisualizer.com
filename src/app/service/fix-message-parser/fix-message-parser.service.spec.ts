import { TestBed } from '@angular/core/testing';

import { FixMessageParserService } from './fix-message-parser.service';

describe('FixMessageParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FixMessageParserService = TestBed.get(FixMessageParserService);
    expect(service).toBeTruthy();
  });
});
