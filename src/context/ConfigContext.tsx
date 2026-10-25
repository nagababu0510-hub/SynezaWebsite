import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { AppConfig } from '@/types/config';
import { defaultAppConfig } from '@/config/defaults';
import {
  loadRuntimeAppConfig,
  applyBrandingCssVariables,
  ValidationIssue,
} from '@/services/configService';

interface ConfigContextValue {
  config: AppConfig;
  isLoading: boolean;
  errors: ValidationIssue[];
  refreshConfig: () => Promise<void>;
  updateConfigOverride: (partialConfig: Partial<AppConfig>) => void;
}

const ConfigContext = createContext<ConfigContextValue | undefined>(undefined);

export const ConfigProvider: React.FC<{
  children: React.ReactNode;
  initialConfig?: AppConfig;
}> = ({ children, initialConfig }) => {
  const [config, setConfig] = useState<AppConfig>(initialConfig || defaultAppConfig);
  const [isLoading, setIsLoading] = useState<boolean>(!initialConfig);
  const [errors, setErrors] = useState<ValidationIssue[]>([]);

  const refreshConfig = useCallback(async () => {
    setIsLoading(true);
    try {
      const { config: loadedConfig, errors: validationErrors } = await loadRuntimeAppConfig();
      setConfig(loadedConfig);
      setErrors(validationErrors);
    } catch (err) {
      console.error('Failed to load runtime configurations:', err);
      // Retain current or fallback
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!initialConfig) {
      refreshConfig();
    } else {
      applyBrandingCssVariables(initialConfig.branding);
    }
  }, [initialConfig, refreshConfig]);

  const updateConfigOverride = useCallback((partial: Partial<AppConfig>) => {
    setConfig((prev) => {
      const merged = { ...prev, ...partial };
      if (merged.branding) {
        applyBrandingCssVariables(merged.branding);
      }
      return merged;
    });
  }, []);

  const value = useMemo(
    () => ({
      config,
      isLoading,
      errors,
      refreshConfig,
      updateConfigOverride,
    }),
    [config, isLoading, errors, refreshConfig, updateConfigOverride]
  );

  return <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>;
};

export function useConfig(): ConfigContextValue {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
}
