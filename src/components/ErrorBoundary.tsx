import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="text-6xl mb-4">😅</div>
        <h1 className="text-2xl font-bold text-neutral-900 mb-4">
          Ops! Algo deu errado
        </h1>
        <p className="text-neutral-600 mb-6">
          Não se preocupe, isso é temporário. Tente recarregar a página.
        </p>
        <button
          onClick={resetErrorBoundary}
          className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
        >
          Tentar Novamente
        </button>
        <p className="text-sm text-neutral-500 mt-4">
          Se o problema persistir, entre em contato conosco.
        </p>
      </div>
    </div>
  );
}

export default function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => {
        // Log do erro para monitoramento
        console.error('Erro capturado:', error, errorInfo);
        
        // Aqui você pode enviar o erro para um serviço de monitoramento
        // como Sentry, LogRocket, etc.
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}
