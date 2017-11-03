exports.getTemplate = function() {
	return {
			"name": "Database Table",
			"description": "Database Table Template",
			"sources": [{
				"location": "template-database-table/template.table", 
				"action": "generate",
				"rename": "{{fileName}}.table"
		    }],
		    "parameters": [{
		    	"name": "tableName",
		    	"label": "Table Name"
		    }]
	};
};