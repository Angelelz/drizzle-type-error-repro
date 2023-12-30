This repo is a simple reproduction of https://github.com/drizzle-team/drizzle-orm/issues/1730.

To reproduce:

1. `pnpm i`
2. Go to SampleUtils.ts and notice that the type of `table1RowWrong` is not typed properly but `table1RowCorrect` is.
