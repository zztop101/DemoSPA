import { TestBed } from '@angular/core/testing';

import { BlogPostsResolverService } from './blog-posts-resolver.service';

describe('BlogPostsResolverService', () => {
  let service: BlogPostsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogPostsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
