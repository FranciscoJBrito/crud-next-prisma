import { getProjects } from '../../../server-functions/getProjects'

describe('Testing api/projects endpoints ', () => {
      it('should return an object', () => {
            getProjects().then(data => {
                  expect(data).toBe('object')
            })
      })
})