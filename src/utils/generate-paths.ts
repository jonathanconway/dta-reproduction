import { kebabCase } from "lodash";

type PathsDefinition = Record<
  string,
  PathsDefinitionPath | Record<string, PathsDefinitionPath>
>;

type PathsDefinitionPath = {};

type Paths<T> = {
  [key in keyof T]: Path<T[key]>;
};

type Path<T> = Paths<T> & {
  readonly path: string;
  readonly fullPath: string;
};

export function generatePaths<T extends PathsDefinition>(
  paths: T,
  parentPath: string = ""
): Paths<T> {
  return Object.fromEntries(
    Object.entries(paths).map(([key, value]) => {
      const path = kebabCase(key);

      const otherPaths = generatePaths(value, parentPath + "/" + path);

      const fullPath = parentPath + "/" + path;

      const newValue = {
        ...otherPaths,
        path,
        fullPath,
      };

      return [key, newValue];
    })
  ) as Paths<T>;
}
