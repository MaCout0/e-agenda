import { EnvironmentProviders, makeEnvironmentProviders } from "@angular/core";
import { AuthService } from "./services/auth.service";

export const provideAuthentication = (): EnvironmentProviders => {
    return makeEnvironmentProviders([
      AuthService,
    ]);
  };