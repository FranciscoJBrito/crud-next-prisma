import { getNotes } from '@/http_func/getNotes';

test('should return an object', async () => {
            const data = await getNotes();
            expect(typeof data).toBe('object');
});
/* describe('Testing HTTP methods', () => {
      
      it('should return an object', async () => {
            const notes = await getNotes()
            expect(typeof notes).toBe('object')
      })
}) */