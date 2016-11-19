using System.Data.Entity.Migrations;

namespace Biblioteca.Data.Migrations
{
    public partial class initialCreate : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Libroes", "Año", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Libroes", "Año");
        }
    }
}
