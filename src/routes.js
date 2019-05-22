const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

import WithLodash from './components/WithLodash'

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/technique/lodash', component: WithLodash }
]

export default routes
