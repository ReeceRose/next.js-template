import { render } from '@testing-library/react';

import Page from '@/app/page';

test('Index page matches snapshot', () => {
  const { asFragment } = render(<Page />);
  expect(asFragment()).toMatchSnapshot();
});
