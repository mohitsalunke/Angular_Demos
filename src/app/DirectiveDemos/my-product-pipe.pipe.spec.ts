import { MyProductPipePipe } from './my-product-pipe.pipe';

describe('MyProductPipePipe', () => {
  it('create an instance', () => {
    const pipe = new MyProductPipePipe();
    expect(pipe).toBeTruthy();
  });
});
