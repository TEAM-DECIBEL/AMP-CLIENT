import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@shared/apis/query-client";
import Tooltip from "@shared/ui/tooltip/tooltip";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>host</div>
      <Tooltip />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
