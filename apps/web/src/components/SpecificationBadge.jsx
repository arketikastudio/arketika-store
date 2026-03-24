
import React from 'react';
import { Badge } from '@/components/ui/badge.jsx';

const SpecificationBadge = ({ label, value, variant = 'outline' }) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
      <Badge 
        variant={variant}
        className="w-fit text-sm font-normal bg-muted/50 text-foreground border-border hover:bg-muted transition-colors duration-200"
      >
        {value}
      </Badge>
    </div>
  );
};

export default SpecificationBadge;
