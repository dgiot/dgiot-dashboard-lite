export default (config: { mock?: boolean; setup: () => void }) => {
  const { mock, setup } = config;
  if (mock === false) return;
  setup();
};
