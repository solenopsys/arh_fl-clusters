import {TestBed} from '@angular/core/testing';

import {ClusterService} from './cluster.service';

describe('ClusterServiceService', () => {
  let service: ClusterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClusterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
