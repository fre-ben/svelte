export default {
	test(assert, vars) {
		assert.deepEqual(vars, [
			{
				export_name: null,
				injected: false,
				module: false,
				mutated: false,
				name: 'foo',
				reassigned: false,
				referenced: true,
				writable: true
			},
			{
				export_name: null,
				injected: false,
				module: false,
				mutated: false,
				name: 'bar',
				reassigned: false,
				referenced: true,
				writable: true
			},
			{
				export_name: null,
				injected: false,
				module: false,
				mutated: false,
				name: 'baz',
				reassigned: false,
				referenced: true,
				writable: true
			}
		]);
	}
};