from django.db.models import Lookup


class CaseInsensitiveLookup(Lookup):
    lookup_name = 'iexact'  # This sets the lookup type to case-insensitive exact match

    def as_sql(self, compiler, connection):
        # Generate SQL for case-insensitive exact match
        lhs, lhs_params = self.process_lhs(compiler, connection)
        rhs, rhs_params = self.process_rhs(compiler, connection)
        params = lhs_params + rhs_params
        return f"LOWER({lhs}) = LOWER({rhs})", params
