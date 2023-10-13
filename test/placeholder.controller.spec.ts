// test for placeholder.controller.ts
import { Test, TestingModule } from '@nestjs/testing';
import { PlaceholderController } from '../src/modules/placeholder/placeholder.controller';
import { PlaceholderService } from '../src/modules/placeholder/placeholder.service';

describe('PlaceholderController', () => {
  let placeholderController: PlaceholderController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PlaceholderController],
      providers: [PlaceholderService],
    }).compile();

    placeholderController = app.get<PlaceholderController>(
      PlaceholderController,
    );
  });

  const posts = [
    {
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body:
        'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit' +
        ' molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body:
        'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores ' +
        'neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus ' +
        'qui neque nisi nulla',
    },
  ];

  describe('root', () => {
    it('should return list of posts', async () => {
      const result = await placeholderController.findAll();
      // Проверьте, что result и posts являются массивами объектов
      expect(Array.isArray(result)).toBe(true);
      expect(Array.isArray(posts)).toBe(true);

      // Проверьте, что каждый объект в массиве имеет ожидаемый формат
      for (let i = 0; i < result.length; i++) {
        expect(result[i]).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            title: expect.any(String),
            body: expect.any(String),
            userId: expect.any(Number),
          }),
        );
      }
    });
  });

  const post = {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit' +
      ' molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  };

  describe('root', () => {
    it('should return the post by id', async () => {
      const result = await placeholderController.findOne(1);
      expect(result).toEqual(post);
    });
  });
});
